import { CardSearchContainer } from "./style";

const CardSearch = ({
  title,
  name,
  description,
  frequency,
  category,
  difficulty,
}) => {
  return (
    <CardSearchContainer>
      <p>{(title && "Habit") || (name && "Group")}</p>
      <h1>{title || name}</h1>
      <p>
        {category} - {difficulty}
      </p>
      <p>{description}</p>
      <p>{frequency}</p>
    </CardSearchContainer>
  );
};

export default CardSearch;
