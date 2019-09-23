---
title: Using useState hook with TypeScript
description: >-
  If you are new in TypeScript and you are confusing how to use it with the
  useState hook here is a tip: Is more simple than than imagine.
date: '2019-09-23 17:32:43'
image: /assets/react-typescript.jpg
tags:
  - react
  - typescript
---

## Introduction

Despite the ups and downs, TypeScript is becoming ever popular each day. You can check in this recent image from [Google Trends](https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=typescript):

![TypeScript - Interest over time](/assets/using-usestate-hook-with-typescript-1.jpg 'TypeScript - Interest over time')

The same for Hooks after React Hooks introduce it in the version 16.8. Hooks heave formerly “stateless” functional components to [basically everything](https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes) traditional class components can be. With a powerful and expressive new way to reuse functionality between components.

One of them and most commonly hook used is the [useState](https://reactjs.org/docs/hooks-reference.html#usestate). In this post we will check the right way to declare types for it.

## Declaring useState types

Before Hooks, types for states were defined by a generic type in the `React.Component`. You were also obligated to define an empty interface to Props.

```javascript
interface IState {
  value: number;
}

class MyClass extends React.Component<{}, IState> {
  constructor() {
    super()

    this.state = {
      value: 0,
    }
  }

  render() {
    return <div>{this.state.value}</div>
  }
}
```

With addition of useState hook, each state is defined separately, like so:

```javascript
const [state, setState] = useState(initialState)
```

Basically, the `state` is initialized with a `initialState` value and can be updated using the `setState` function. So, if I want define a `count` state I just need to do:

```javascript
const [count, setCount] = useState(0)
```

Now comes the question: how can I define a type for this state?

Looking for the `useState` type definition we have:

```javascript
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (value: A) => void;
```

It means that `useState` is using a [Generic](https://www.typescriptlang.org/docs/handbook/generics.html) type variable named S. So, for define the type for our state we just need replace the variable S for the our desire type or interface. Let's back to our count example and add the type `number` for it:

```javascript
const [count, setCount] = useState < number > 0
```

This means that the variable S is now a `number`. Replacing it in the `useState` definition we have:

```javascript
function useState<number>(initialState: number | (() => number)): [number, Dispatch<SetStateAction<number>>];

type SetStateAction<number> = number | ((prevState: number) => number);

type Dispatch<SetStateAction<number>> = (value: SetStateAction<number>) => void;
```

In most cases, the types for useState can be **inferred** based on the initial value, but if you need to start with null or undefined, or need more control over the typing, such as specifying the types for an array or object, a generic can be used.

```javascript
// inferred as number
const [value, setValue] = useState(0);

// explicitly setting the types
const [value, setValue] = useState<number | undefined>(undefined);
const [value, setValue] = useState<Array<number>>([]);
const [value, setValue] = useState<number[]>([]);

interface MyObject {
  foo: string;
  bar?: number;
}

const [value, setValue] = useState<MyObject>({ foo: 'hello' });
```

## Conclusion

This was a very simple tip on how to add types to the useState hooks in React. Most of you probably already know how to do this, but sometimes it can be confused if you are unfamiliar with Hooks and TypeScript. We saw how states typed are defined before and now with hooks. We also saw how useState types works behind the scenes and where they can be inferred or not.
