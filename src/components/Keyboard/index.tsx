import { KeyboardStyles } from "./styles";

const Keyboard = () => {
  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', {text: <>&#9003;</>, type: 'backspace'}],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', {text: 'enter', type: 'enter'}]
  ];

  return (
    <KeyboardStyles>
    {
      keyboard.map(line => (
        <div className="line">
          {
            line.map(letter => {
              const isString = typeof letter === 'string';
              return (
                <button className={`${isString ? '' : `${letter.type} `}letter`}>
                  {isString ? letter : letter.text}
                </button>
              );
            })
          }
        </div>
      ))
    }
    </KeyboardStyles>
  );
};

export { Keyboard };
