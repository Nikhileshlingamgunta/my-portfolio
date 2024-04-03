import { Component, inject, TemplateRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {

  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content,{size: 'xl', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
		);
	}
}
