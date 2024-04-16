export const actionReel = (symbols, spinNumber, setSymbols) => {
  for (let i = 0; i < spinNumber; i++) {
    let shift = i % symbols.length;
    let newSymbols = [
      ...symbols.slice(shift, symbols.length),
      ...symbols.slice(0, shift),
    ].reverse();

    setTimeout(() => {
      setSymbols(newSymbols);
    }, i * 100);
  }
};
