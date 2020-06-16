import { Observable, of } from 'rxjs';
export interface User {
    
    //email: string;
   
    name?: string;
    uid: string;
  email?: string;
  photoURL?: Observable<string>;
  displayName?: string;
  myCustomData?: string;
  unique?: string;
  CollegeName?: string;
  CollegeCity?: string;
    
  }