import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService, Lead } from '../services/lead.service';
@Component({
  selector: 'app-lead-edit',
  templateUrl: './lead-edit.component.html',
  styleUrls: ['./lead-edit.component.css']
})
export class LeadEditComponent implements OnInit {

  leadForm!: FormGroup;
  submitted = false;
  leadId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private leadService: LeadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.leadForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      interestedProducts: ['', Validators.required]
    });

    this.leadId = +this.route.snapshot.paramMap.get('id')!;
    this.loadLead(this.leadId);
  }

  get f() {
    return this.leadForm.controls;
  }

  loadLead(id: number): void {
    this.leadService.getLead(id).subscribe(
      (data: Lead) => {
        this.leadForm.patchValue(data);
      },
      error => console.error('Error loading lead:', error)
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.leadForm.invalid) {
      return;
    }

    const updatedLead: Lead = {
      id: this.leadId,
      ...this.leadForm.value
    };

    this.leadService.updateLead(updatedLead).subscribe(
      {
       next:() => this.router.navigate(['/leadview/'+ this.leadId]),
       error: error => console.error('Error updating lead:', error)
      }
    );
  }
}
