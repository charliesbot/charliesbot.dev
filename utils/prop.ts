const prop = <K extends string>(key: K) => <V>(obj: { [k in K]: V }): V =>
  obj[key];

export { prop };
