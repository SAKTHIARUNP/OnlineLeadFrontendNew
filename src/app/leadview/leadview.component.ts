import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService} from '../services/lead.service';
import { LeadeditService } from '../services/leadedit.service';
import { Lead } from '../class/Lead.model';


@Component({
  selector: 'app-lead-view',
  templateUrl: './leadview.component.html',
  styleUrls: ['./leadview.component.css']
})
export class LeadViewComponent implements OnInit {
  allLead:Lead[]=[]
      
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadService: LeadService,
    private leadedit: LeadeditService
  ) {}

  ngOnInit(): void {
    const leadId = +this.route.snapshot.paramMap.get('leadId')!;
    this.loadLead();
  }

  loadLead(): void {
    this.leadedit.getAllLeads().subscribe({
     next: (resp) => {this.allLead=resp;    },
      error :(err)=> console.error('Error loading lead:')
  });
  }

  onEdit(Id: number): void {
   this.router.navigate(['/lead-edit/' + Id]);
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this lead?')) {
      this.leadService.deleteLead(this.allLead[0].leadId).subscribe({
        next: () => this.router.navigate(['/leads']),
        error: error => console.error('Error deleting lead:', error)
      });
    }
  }
}