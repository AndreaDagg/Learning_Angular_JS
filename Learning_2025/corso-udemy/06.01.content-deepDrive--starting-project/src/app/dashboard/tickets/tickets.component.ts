import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './tiket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(tiketData: { title: string; description: string }) {
    const ticket: Ticket = {
      title: tiketData.title,
      request: tiketData.description,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  oncloseTicket(id: string){
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });  
  }
}
 