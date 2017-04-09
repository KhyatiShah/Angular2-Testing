export class Hero {
  id: number;
  name: string;
}


// // async beforeEach
// beforeEach(async(() => {
//   TestBed.configureTestingModule({
//     declarations: [ BannerComponent ], // declare the test component
//   })
//       .compileComponents();  // compile template and css
// }));
//
// // synchronous beforeEach
// beforeEach(() => {
//   fixture = TestBed.createComponent(BannerComponent);
//
//   comp = fixture.componentInstance; // BannerComponent test instance
//
//   // query for the title <h1> by CSS element selector
//   de = fixture.debugElement.query(By.css('h1'));
//   el = de.nativeElement;
// });