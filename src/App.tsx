import React, { useState } from 'react';
import { Button } from './components/Button';

interface AppProps {}

export const App = ({}: AppProps) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col items-center border rounded border-blue-400">
        <h1 className="text-2xl text-blue-400 m-2">Count</h1>
        <div>{count}</div>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
};
