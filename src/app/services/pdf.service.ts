import { Injectable, inject } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MountainService } from './mountain.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private mountainService = inject(MountainService);

  async generatePdf(): Promise<void> {
    const doc = new jsPDF();
    
    const climbedMountains = this.mountainService.climbedMountains();
    const notClimbedMountains = this.mountainService.notClimbedMountains();
    const totalMountains = climbedMountains.length + notClimbedMountains.length;
    
    const primaryColor: [number, number, number] = [45, 80, 56];
    const accentGreen: [number, number, number] = [76, 175, 80];
    const accentOrange: [number, number, number] = [255, 152, 0];
    const lightBg: [number, number, number] = [245, 247, 245];
    
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Crown of Europe', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const dateStr = new Date().toLocaleDateString('en-US');
    doc.text(`Progress Report - ${dateStr}`, 105, 30, { align: 'center' });
    
    const percentage = totalMountains > 0 ? Math.round(climbedMountains.length / totalMountains * 100) : 0;
    doc.text(`Climbed: ${climbedMountains.length}/${totalMountains} (${percentage}%)`, 105, 38, { align: 'center' });
    
    let currentY = 55;
    
    if (climbedMountains.length > 0) {
      doc.setTextColor(...accentGreen);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(`Climbed Peaks (${climbedMountains.length})`, 14, currentY);
      
      currentY += 5;
      
      autoTable(doc, {
        startY: currentY,
        head: [['Name', 'Height (m)', 'Country', 'Difficulty']],
        body: [...climbedMountains]
          .sort((a, b) => b.height - a.height)
          .map(m => [m.name, m.height.toString(), m.country, m.difficulty]),
        headStyles: {
          fillColor: accentGreen,
          textColor: [255, 255, 255],
          fontStyle: 'bold'
        },
        bodyStyles: {
          textColor: [60, 60, 60]
        },
        alternateRowStyles: {
          fillColor: lightBg
        },
        styles: {
          fontSize: 10,
          cellPadding: 4
        },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 30, halign: 'center' },
          2: { cellWidth: 55 },
          3: { cellWidth: 35, halign: 'center' }
        },
        margin: { left: 14, right: 14 }
      });
      
      currentY = (doc as any).lastAutoTable.finalY + 15;
    }
    
    if (currentY > 200 && notClimbedMountains.length > 0) {
      doc.addPage();
      currentY = 20;
    }
    
    if (notClimbedMountains.length > 0) {
      doc.setTextColor(...accentOrange);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(`Peaks to Climb (${notClimbedMountains.length})`, 14, currentY);
      
      currentY += 5;
      
      autoTable(doc, {
        startY: currentY,
        head: [['Name', 'Height (m)', 'Country', 'Difficulty']],
        body: [...notClimbedMountains]
          .sort((a, b) => b.height - a.height)
          .map(m => [m.name, m.height.toString(), m.country, m.difficulty]),
        headStyles: {
          fillColor: accentOrange,
          textColor: [255, 255, 255],
          fontStyle: 'bold'
        },
        bodyStyles: {
          textColor: [60, 60, 60]
        },
        alternateRowStyles: {
          fillColor: lightBg
        },
        styles: {
          fontSize: 10,
          cellPadding: 4
        },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 30, halign: 'center' },
          2: { cellWidth: 55 },
          3: { cellWidth: 35, halign: 'center' }
        },
        margin: { left: 14, right: 14 }
      });
    }
    
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(128, 128, 128);
      doc.setFont('helvetica', 'normal');
      doc.text(
        `Crown of Europe - Page ${i} of ${pageCount}`,
        105,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
    }
    
    doc.save('crown-of-europe.pdf');
  }
}
