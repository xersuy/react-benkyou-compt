import React,{FC, ReactNode, ReactElement} from 'react';

const MultiProvider = (props:any) => {
  let content:ReactNode|null = props.children || null;

  /* Error/Validation */
  if (!props.providers) {
    throw "MultiProvider: Missing providers prop";
  }

  if (!props.children) {
    throw "MultiProvider: Missing children";
  }

  // Turn object into an array
  // const numberOfProviders = props.providers.size;
  const numberOfProviders = props.providers.length;

  if (!numberOfProviders) {
    // Providers prop is empty, r
    return content;
  }

  props.providers.forEach((provider :any ) => {
    content = React.cloneElement(provider, undefined, content);
  });

  return content;
}

export default MultiProvider;