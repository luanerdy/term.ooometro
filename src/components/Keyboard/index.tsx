import { KeyboardProps } from "../../@types/propsTypes";
import { KeyboardStyles } from "./styles";

const Keyboard = (props: KeyboardProps) => {
  const { setActiveLetter } = props;

  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', {text: <>&#9003;</>, type: 'backspace'}],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', {text: 'enter', type: 'enter'}]
  ];

  return (
    <KeyboardStyles>
    {
      keyboard.map((line, idx) => (
        <div className="line" key={idx}>
          {
            line.map((letter, idx) => {
              const isString = typeof letter === 'string';
              const type = !isString && letter.type;
              return (
                <button key={idx} onClick={isString ? () => setActiveLetter('write', letter) : (type === 'backspace' ? () => setActiveLetter('erase') : () => setActiveLetter('enter'))} className={`${isString ? '' : `${type} `}letter`}>
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
