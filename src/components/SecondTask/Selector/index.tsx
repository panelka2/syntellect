import React, { useEffect, useState } from "react";
import { CountryItem } from "../CountryItem";
import selector from "../../../store/secondTask";
import s from "./style.module.css";
import { observer } from "mobx-react-lite";

interface SelectorProps {
  limit?: number;
  placeholder?: string;
}

export const Selector = observer(
  ({ limit = 10, placeholder = "" }: SelectorProps): JSX.Element => {
    const [selectorStore] = useState(() => new selector(limit, placeholder));
    useEffect(() => {
      selectorStore.getCountries();
    }, [selectorStore]);
    return (
      <div>
        <input
          value={selectorStore.value}
          onChange={(e) => selectorStore.inputChange(e)}
          placeholder={`Длина списка ${placeholder}`}
        />
        {!!selectorStore.countries.length && (
          <ul className={s.country_list}>
            {selectorStore.countries.map(
              (country, index) =>
                index < limit && (
                  <li
                    key={country.name}
                    className={s.block}
                    tabIndex={index}
                    onClick={() => selectorStore.countryClick(country.fullName)}
                  >
                    <CountryItem
                      name={country.name}
                      fullName={country.fullName}
                      flag={country.flag}
                    />
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    );
  }
);
