import {Directive, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[roNgxSimplePrint]'
})
export class NgxSimplePrintDirective implements OnInit {
  printSection: any;
  sectionToPrintId = 'ngxSimplePrintSection';
  constructor() { }
  @Input() printContentId;

  ngOnInit(): void {
    this.printSection = document.getElementById(this.sectionToPrintId);

    if (!this.printSection) {
      this.addPrintableSection();
      this.addStyles();
    }

    window.onafterprint = () => {
      this.printSection.innerHTML = '';
    };
  }

  @HostListener('click')
  onclickPrint() {
    const elemToPrint = document.getElementById(this.printContentId);
    if (elemToPrint) {
      this.printSection.innerHTML = '';
      this.printElement(elemToPrint);
    }
  }

  printElement(elem) {
    const domClone = elem.cloneNode(true);
    this.printSection.appendChild(domClone);
    window.print();
  }

  addPrintableSection() {
    this.printSection = document.createElement('div');
    this.printSection.id = this.sectionToPrintId;
    document.body.appendChild(this.printSection);
  }

  addStyles() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(`
        @media screen {
            #ngxSimplePrintSection {
                display: none;
            }
        }
        @media print {
            body * {
                visibility:hidden;
            }
            #ngxSimplePrintSection, #ngxSimplePrintSection * {
                visibility:visible;
            }
            #ngxSimplePrintSection {
                position:absolute;
                left:0;
                top:0;
            }
        }
      `));
    document.body.appendChild(style);
  }
}
