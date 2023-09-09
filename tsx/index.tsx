function Component(props: {message: string}) {
  return (
    <body>
      <h1 style={{color: 'red'}}>{props.message}</h1>
    </body>
  );
}


function App() {
  return <Component message="Hello via Bun!" />;
}

console.log(<App />);
console.log(<Component message="Hello via Bun!" />);
