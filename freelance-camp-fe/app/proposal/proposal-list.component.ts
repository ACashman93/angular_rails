import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://ABCCompany.com', 'Ruby on Rails', 150, 120, 15, 'andrew@cashman.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://XYZCompany.com', 'Ruby on Rails', 125, 100, 10, 'andrew@cashman.com')
  proposalThree: Proposal = new Proposal(275, 'QWERTY Company', 'http://QWERTYCompany.com', 'Ruby on Rails', 175, 140, 20, 'andrew@cashman.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}