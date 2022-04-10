import { useEffect } from "react";
import { KeyboardProps } from "../../@types/propsTypes";
import { KeyboardStyles } from "./styles";

const Keyboard = (props: KeyboardProps) => {
  const { setActiveLetter } = props;

  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', {text: <>&#9003;</>, type: 'backspace'}],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', {text: 'enter', type: 'enter'}]
  ];

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      const key = event.code.toLowerCase().replace('key', '');
      console.log(key);

      const validKeys: string[] = [];
      keyboard.forEach(line => line.forEach(letter => validKeys.push(typeof letter === 'string' ? letter : letter.type)));
      const isValidKey = validKeys.includes(key);

      if(!isValidKey) return;

      if(key === 'backspace') return setActiveLetter('erase');
      if(key === 'enter') return setActiveLetter('enter');

      setActiveLetter('write', key);
    };

    window.addEventListener('keyup', handleKeyPress);

    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    }
  }, [setActiveLetter]);

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
