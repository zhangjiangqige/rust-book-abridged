"use strict";(self.webpackChunkrust_book_abridged=self.webpackChunkrust_book_abridged||[]).push([[298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="19.3 - Advanced Types",s={unversionedId:"ch19/ch19-03-advanced-types",id:"ch19/ch19-03-advanced-types",title:"19.3 - Advanced Types",description:"Using the Newtype Pattern for Type Safety and Abstraction",source:"@site/docs/ch19/ch19-03-advanced-types.md",sourceDirName:"ch19",slug:"/ch19/ch19-03-advanced-types",permalink:"/rust-book-abridged/ch19/ch19-03-advanced-types",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ch19/ch19-03-advanced-types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"19.2 - Advanced Traits",permalink:"/rust-book-abridged/ch19/ch19-02-advanced-traits"},next:{title:"19.4 - Advanced Functions and Closures",permalink:"/rust-book-abridged/ch19/ch19-04-advanced-functions-and-closures"}},p={},l=[{value:"Using the Newtype Pattern for Type Safety and Abstraction",id:"using-the-newtype-pattern-for-type-safety-and-abstraction",level:2},{value:"Creating Type Synonyms with Type Aliases",id:"creating-type-synonyms-with-type-aliases",level:2},{value:"The Never Type that Never Returns",id:"the-never-type-that-never-returns",level:2},{value:"Dynamically Sized Types and the Sized Trait",id:"dynamically-sized-types-and-the-sized-trait",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"193---advanced-types"},"19.3 - Advanced Types"),(0,r.kt)("h2",{id:"using-the-newtype-pattern-for-type-safety-and-abstraction"},"Using the Newtype Pattern for Type Safety and Abstraction"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch19/ch19-02-advanced-traits#using-the-newtype-pattern-to-implement-external-traits-on-external-types"},"previous section"),", we discussed using the ",(0,r.kt)("em",{parentName:"p"},"newtype")," pattern to wrap an existing type in a tuple."),(0,r.kt)("p",null,"The newtype pattern is useful in a few other scenarios too. If we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Millisecond")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"struct Millisecond(u32);\n\nfn sleep(duration: Millisecond) {\n    // --snip--\n}\n")),(0,r.kt)("p",null,"This makes it very clear that ",(0,r.kt)("inlineCode",{parentName:"p"},"sleep")," expects a value in milliseconds (although in this particular example you'd be better off using ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/time/struct.Duration.html"},(0,r.kt)("inlineCode",{parentName:"a"},"std::time::Duration")),". The newtype pattern can also be used to wrap a type and give it a different public API."),(0,r.kt)("h2",{id:"creating-type-synonyms-with-type-aliases"},"Creating Type Synonyms with Type Aliases"),(0,r.kt)("p",null,"We can give an existing type a ",(0,r.kt)("em",{parentName:"p"},"type alias"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'type Kilometers = i32;\n\nlet x: i32 = 5;\nlet y: Kilometers = 5;\n\nprintln!("x + y = {}", x + y);\n')),(0,r.kt)("p",null,"This creates a new type called ",(0,r.kt)("inlineCode",{parentName:"p"},"Kilometers")," which is an alias for i32. You can now use these types interchangeably - if a function expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"Kilometers")," you can pass in an i32 instead or vice versa."),(0,r.kt)("p",null,"The main use case for type aliases is to reduce the length of long type names. We can take code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let f: Box<dyn Fn() + Send + 'static> = Box::new(|| println!(\"hi\"));\n\nfn takes_long_type(f: Box<dyn Fn() + Send + 'static>) {\n    // --snip--\n}\n\nfn returns_long_type() -> Box<dyn Fn() + Send + 'static> {\n    // --snip--\n}\n")),(0,r.kt)("p",null,"and turn it into:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'type Thunk = Box<dyn Fn() + Send + \'static>;\n\nlet f: Thunk = Box::new(|| println!("hi"));\n\nfn takes_long_type(f: Thunk) {\n    // --snip--\n}\n\nfn returns_long_type() -> Thunk {\n    // --snip--\n}\n')),(0,r.kt)("p",null,"A meaningful name for your alias can make your code much easier to read and write. Another example of this is in ",(0,r.kt)("inlineCode",{parentName:"p"},"std::io"),". Many functions here return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Result")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"std::io::Error")," as the error type, so ",(0,r.kt)("inlineCode",{parentName:"p"},"std:io")," defines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"type Result<T> = std::result::Result<T, std::io::Error>;\n")),(0,r.kt)("p",null,"which makes a lot of function signatures in this module much shorter and easier to read."),(0,r.kt)("h2",{id:"the-never-type-that-never-returns"},"The Never Type that Never Returns"),(0,r.kt)("p",null,"There's a special type named ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),". This is the ",(0,r.kt)("em",{parentName:"p"},"empty type")," or ",(0,r.kt)("em",{parentName:"p"},"never type"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn bar() -> ! {\n    // --snip--\n}\n")),(0,r.kt)("p",null,"Here this tells the compiler that the ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," function will never return. Way back in ",(0,r.kt)("a",{parentName:"p",href:"/rust-book-abridged/ch02-guessing-game",title:"Chapter 2: Guessing Game"},"chapter 2")," we wrote this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"loop {\n    // --snip--\n    let guess: u32 = match guess.trim().parse() {\n        Ok(num) => num,\n        Err(_) => continue,\n    };\n    // --snip--\n}\n")),(0,r.kt)("p",null,"The arms of a ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," are supposed to all be of the same type in order for it to compile. You can't have one arm evaluate to a ",(0,r.kt)("inlineCode",{parentName:"p"},"u32")," and another evaluate to a ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),". Here though, we know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Err(_)")," arm isn't going to return anything - if we get here, we'll abort this run through the loop and continue. From a type perspective, the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),", so here Rust knows it's safe to ignore this arm (or to put it another way, the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," type can be coerced to any other type)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"panic!")," macro is another example of something that evaluates to the ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl<T> Option<T> {\n    pub fn unwrap(self) -> T {\n        match self {\n            Some(val) => val,\n            None => panic!("called `Option::unwrap()` on a `None` value"),\n        }\n    }\n}\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"loop")," without a ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," is also of type ",(0,r.kt)("inlineCode",{parentName:"p"},"!"),"."),(0,r.kt)("h2",{id:"dynamically-sized-types-and-the-sized-trait"},"Dynamically Sized Types and the Sized Trait"),(0,r.kt)("p",null,"When we create a variable on the stack, Rust needs to know how much space to allocate for that variable at compile time. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn add(a: i32, b: i32) {\n    println!("{}", a + b);\n}\n')),(0,r.kt)("p",null,"When someone calls ",(0,r.kt)("inlineCode",{parentName:"p"},"add"),", Rust will need to allocate four bytes on the stack to hold ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", and another four to hold ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("p",null,"Consider a string, which holds a variable amount of data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn say_hello(name: &str) {\n    println!("Hello {name}");\n}\n')),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," isn't actually a ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," but a ",(0,r.kt)("inlineCode",{parentName:"p"},"&str"),' or a string slice. The actual data from the string is stored "somewhere else" in memory, but the ',(0,r.kt)("inlineCode",{parentName:"p"},"name")," variable itself is 16 bytes long on a 64-bit platform (two ",(0,r.kt)("inlineCode",{parentName:"p"},"usize"),"s). This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"&str")," is implemented as a pointer to the string data and a length value."),(0,r.kt)("p",null,"As a rule, to pass around ",(0,r.kt)("em",{parentName:"p"},"dynamically sized types")," like a string, we need a pointer. This can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"Rc")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),", but some kind of pointer. Another example of a dynamically sized type is a trait object, which is why when we pass one it's usually in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Box<dyn Trait>"),". The size of the trait object itself is unknown, so we pass around a smart pointer to the trait object instead, allowing us to store the trait object on the heap."),(0,r.kt)("p",null,"Any type whose size is known at compile time automatically implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sized")," trait. Generic functions implicitly get a trait bounds for ",(0,r.kt)("inlineCode",{parentName:"p"},"Sized"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// You write this:\nfn my_generic_fn<T>(t: T) {\n    // --snip--\n}\n\n// But Rust implicitly turns this into:\nfn my_generic_fn<T: Sized>(t: T) {\n    // --snip--\n}\n")),(0,r.kt)("p",null,"You can prevent this with this syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// T doesn't have to be `Sized`.\nfn generic<T: ?Sized>(t: &T) {\n    // --snip--\n}\n")),(0,r.kt)("p",null,"Note that in order to do this, we can't leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"t")," parameter of type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),". We again need some kind of pointer, in this case we chose ",(0,r.kt)("inlineCode",{parentName:"p"},"&T"),"."))}d.isMDXComponent=!0}}]);