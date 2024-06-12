import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadService, Lead } from '../services/lead.service';
import { LeadeditService } from '../services/leadedit.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  lead: Lead={
    id: 0, name: "", email: "", mobile: "", address: "", interestedProducts: "",
    getAllLeads: function (): unknown {
      throw new Error('Function not implemented.');
    }
  };
  accountNumber: string = '';  // Add this property to capture account number
  allLead: any;
  leadedit: any;

  constructor(
    private route: ActivatedRoute,
    private leadService: LeadService,
    private router: Router,
    private editService: LeadeditService
  ) {}

  ngOnInit(): void {
    //const leadId = +this.route.snapshot.paramMap.get('id')!;
    this.loadLead();
  }

  loadLead(): void {
    this.leadedit.getAllLeads().subscribe({
     next: (resp: any) => {this.allLead=resp;    },
      error :(err: any)=> console.error('Error loading lead:')
  });
  }

  approveLead(): void {
    // Add your approval logic here
    alert('Lead approved!');
    this.router.navigate(['/leads']);
  }

  rejectLead(): void {
    // Add your rejection logic here
    alert('Lead rejected!');
    this.router.navigate(['/leads']);
  }
}