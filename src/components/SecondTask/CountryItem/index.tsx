import s from "./style.module.css";

interface CountryItemProps {
  name: string;
  fullName: string;
  flag: string;
}

export const CountryItem = ({
  name,
  fullName,
  flag,
}: CountryItemProps): JSX.Element => (
  <div className={s.block_country}>
    <div className={s.image}>
      <img src={flag} alt={name} />
    </div>
    <div className={s.country_name}>
      <span>{fullName}</span>
      <span>{name}</span>
    </div>
  </div>
);
