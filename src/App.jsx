import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import './App.css';

function App() {
  return (
    <div className="app">
      <RecoilRoot>
        <h1>Char Counter</h1>
        <CharCount />
        <GetCharValue />
        <GetCharLength />
      </RecoilRoot>
    </div>
  )
}

const charAtom = atom({
  key: 'charState',
  default: 0
});

const CharCount = () => {
  const [text, setText] = useRecoilState(charAtom);

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

const GetCharValue = () => {
  const [text] = useRecoilState(charAtom);

  return (
    <h3>{text}</h3>
  )
}

const charValueSelector = selector({
  key: "charValueSelector",
  get: ({ get }) => {
    const text = get(charAtom);
    return text.length;
  }
})

const GetCharLength = () => {
  return (
    <h3>Length : {useRecoilValue(charValueSelector)}</h3>
  )
}

export default App;
