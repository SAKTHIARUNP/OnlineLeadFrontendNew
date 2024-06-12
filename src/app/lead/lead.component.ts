import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeadService, Lead } from '../services/lead.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  leadForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private leadService: LeadService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.leadForm = this.formBuilder.group({
      id: ['', Validators.required], // Added id field
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      interestedProducts: ['', Validators.required], // Store as a string for input
    });
  }

  get f() {
    return this.leadForm.controls;
  }

  onSubmit(leadForm: any) {
    this.submitted = true;

    if (this.leadForm.invalid) {
      console.log("leadform invalid");
      return;
    }

    const interestedProducts = this.leadForm.value.interestedProducts.split(',').map((product: string) => product.trim());

    const lead: Lead = {
      id: this.leadForm.value.id, // Assuming id is auto-generated or not needed for initial save
      name: this.leadForm.value.name,
      mobile: this.leadForm.value.mobile,
      email: this.leadForm.value.email,
      address: this.leadForm.value.address,
      interestedProducts: interestedProducts.join(', ') // Convert back to string if needed
      ,
      getAllLeads: function (): unknown {
        throw new Error('Function not implemented.');
      }
    };

    // Assign the id to authservice register
    this.authService.register.id = lead.id;

    this.leadService.saveLead(lead).subscribe({
      next: (response) => this.router.navigate(['/login']),
      error: (response) => {
        console.error('Error saving lead:', response);
      }
    });
  }

  AddUser(leadForm: any) {
    
    let lead: Lead = {
      id: leadForm.value.id,
      name: leadForm.value.name,
      email: leadForm.value.email,
      mobile: leadForm.value.mobile,
      address: leadForm.value.address,
      interestedProducts: leadForm.value.interestedProducts,
      
      getAllLeads: function (): unknown {
        throw new Error('Function not implemented.');
      }
    };
    this.router.navigate(['login']);

    this.authService.AddUsers(lead).subscribe({
      next: (response) => this.router.navigate(['login']),
      error: (response) => {
        console.log(response);
      }
    });
  }
}
