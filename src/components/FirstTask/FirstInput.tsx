import { firstInput } from "../../store/firstTask";
import { observer } from "mobx-react-lite";

export const FirstInput = observer(() => {
  return (
    <div>
      <input
        value={firstInput.string}
        onChange={(e) => firstInput.setString(e.target.value)}
      />
      <button onClick={() => firstInput.delString()}>Очистить</button>
      <button onClick={() => firstInput.helloString()}>Hello World!</button>
    </div>
  );
});
