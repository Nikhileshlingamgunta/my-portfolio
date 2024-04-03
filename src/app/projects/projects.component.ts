import { Component, inject, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
	private offcanvasService = inject(NgbOffcanvas);
	private modalService = inject(NgbModal);

	openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}
	openScroll(contenta:  TemplateRef<any>,contentb:  TemplateRef<any>) {
		this.offcanvasService.open(contenta, { scroll: true });
		this.offcanvasService.open(contentb, { scroll: true , position: 'end'});
	}
}
