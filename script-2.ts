interface ComponentProps {
    key1: number; 
    key2: string; 
    keyFoo: (a: number) => number; 
    getKey1: () => number;
  }
  

  const componentProps: ComponentProps = {
    key1: 3,
    key2: "Welcome",
  
    keyFoo: (a: number) => {
      console.log(`keyFoo called with argument: ${a}`);
      return a * 4;
    },
  
    getKey1: () => {
      console.log("getKey1 called");
      return componentProps.key1;
    },
  };
  

  console.log("Initial value of key1:", componentProps.getKey1());
  const fooResult = componentProps.keyFoo(7);
  console.log("Result from keyFoo:", fooResult);