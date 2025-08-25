function a() {
     console.log('a');
     }
function b() {
     a();
      console.log('b');
     }
     function c () {
         a()
        console.log('d');
       
        
     }
b();
a();
c();

