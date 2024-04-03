import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [
	trigger('timelineAnimation', [
		transition('* => *', [ // each time the binding value changes
		  query('.left, .right', [
			style({ opacity: 0, transform: 'translateX(-50px)' }),
			stagger(100, [
			  animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
			])
		   ], //{ optional: true }),
		//   query('.right', [
		// 	style({ opacity: 0, transform: 'translateX(50px)' }),
		// 	stagger(100, [
		// 	  animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
		// 	])
		//   ], { optional: true }
		)
		])
	  ])
  ]
})
export class ExperienceComponent {
  private modalService = inject(NgbModal);
	closeResult = '';


	open(content: TemplateRef<any>) {
		this.modalService.open(content, {size:'lg', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
		);
	}
}
