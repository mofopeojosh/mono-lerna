export const humanize = (value: string) => value.replace(/_/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
