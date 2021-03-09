module.exports = () => {
  ({ e, addUtilities }) => {
    const lista = [...Array(100).keys()];

    const newUtilities = lista.map((x) => {
      return {
        [`.${e(`w-${x}%`)}`]: {
          width: `${x}%`,
        },
      };
    });

    addUtilities(newUtilities);
  };
};
