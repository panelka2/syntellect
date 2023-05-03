import { secondInput } from "../../store/firstTask";
import { observer } from "mobx-react-lite";

export const SecondInput = observer(() => {
  return (
    <div>
      <button onClick={() => secondInput.callAlertForNumber()}>
        Проверка на число
      </button>
      <input
        value={secondInput.string}
        onChange={(e) => secondInput.setString(e.target.value)}
      />
      <button onClick={() => secondInput.callAlert()}>Вывод сообщения</button>
    </div>
  );
});
