import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  private sourceTable: HTMLTableElement;
  private sortOrder: number = -1;
  constructor(
    private httpClient: HttpClient,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    this.getStudentsMarks();
  }
  getStudentsMarks() {
    this.httpClient.get('assets/student-marks.json').subscribe((data: any) => {
      this.createTableFromJSON(data);
    });
  }
  createTableFromJSON(dataSource) {
    let keys = [];
    dataSource.map(book => {
      for (let key in book) {
        if (keys.indexOf(key) === -1) {
          keys.push(key);
        }
      }
    });

    this.sourceTable = this.renderer2.createElement('table');
    this.sourceTable.setAttribute('border', '1');
    this.sourceTable.setAttribute('cellpadding', '15');
    let tr = this.sourceTable.insertRow(-1);

    keys.map(key => {
      let th = this.renderer2.createElement('th');
      th.innerHTML = key;
      tr.appendChild(th);
    });

    dataSource.map(data => {
      tr = this.sourceTable.insertRow(-1);
      keys.map(key => {
        let tabCell = tr.insertCell(-1);
        tabCell.innerHTML = data[key];
      })
    })
    let divContainer = document.getElementById('dataTable');
    const table = this.sourceTable.cloneNode(true);
    divContainer.innerHTML = '';
    divContainer.appendChild(table);
    this.addSorting();
  }

  addSorting() {
    this.sortOrder = -1;
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
      v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('th').forEach(th => th.onclick = () => {
      const table = th.closest('table');
      const tbody = table.querySelector('tbody');
      this.sortOrder = this.sortOrder === -1 ? 1 : this.sortOrder === 1 ? 0 : -1;
      if (this.sortOrder === -1)
        this.resetSort();
      else {
        Array.from(tbody.querySelectorAll('tr:nth-child(n+2)'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.sortOrder))
          .forEach(tr => tbody.appendChild(tr))
      }
    })
  }
  resetSort() {
    let divContainer = document.getElementById('dataTable');
    let table = this.sourceTable.cloneNode(true);
    divContainer.innerHTML = '';
    divContainer.appendChild(table);
    this.addSorting();
  }

}
