import { animate, style, transition, trigger, query, group } from '@angular/animations';

export const modalAnimation = trigger('modalAnimation', [
  transition(':enter', [
    group([
      style({
        opacity: 0,
      }),
      animate(500,
        style({
          opacity: 1,
        })
      ),
      query(".modal-container", [
        style({
          transform: 'translateY(-40px)'
        }),
        animate(300, style({
          transform: 'translateY(0)'
        }))
      ])
    ]),
  ]),
  transition(':leave', group([
    style({
      opacity: 1,
    }),
    animate(500,
      style({
        opacity: 0,
      })
    ),
    query(".modal-container", [
      style({
        transform: 'translateY(0)'
      }),
      animate(300, style({
        transform: 'translateY(-40px)'
      }))
    ])
  ]),)
]);
