import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEdit from "../../components/FormEdit";
import FormUserInput from "../../components/FormUserInput";
import FormActionSelect from "../../components/FormActionSelect";

const muckupDATA = {
  title: "Correr com personagem",
  category: "Mechanical",
  difficulty: "Hard",
  frequency: "Weekend",
  achieved: false,
  how_much_achieved: 30,
  user: 10,
};

let category = [
  { value: "Aim", content: "Aim" },
  { value: "Mechanical", content: "Mechanical" },
  { value: "Decision Making", content: "Decision Making" },
  { value: "Game Sense", content: "Game Sense" },
];
let difficulty = [
  { value: "Easy", content: "Easy" },
  { value: "Medium", content: "Medium" },
  { value: "Hard", content: "Hard" },
];

let frequency = [
  { value: "Daily", content: "Daily" },
  { value: "Weekly", content: "Weekly" },
  { value: "Weekend", content: "Weekend" },
];

const markSelectedOptions = (data) => {
  category.map((option) => {
    if (option.value === data.category) {
      option.selected = true;
    }
  });
  difficulty.map((option) => {
    if (option.value === data.difficulty) {
      option.selected = true;
    }
  });
  frequency.map((option) => {
    if (option.value === data.frequency) {
      option.selected = true;
    }
  });
};

markSelectedOptions(muckupDATA);

const EditHabit = () => {
  return (
    <GlobalContainer>
      <GlobalWrap>
        <FormEdit>
          <FormUserInput>{muckupDATA.title} </FormUserInput>
          <FormActionSelect name="new category">{category}</FormActionSelect>
          <FormActionSelect name="new difficulty">
            {difficulty}
          </FormActionSelect>
          <FormActionSelect name="new frequency">{frequency}</FormActionSelect>
        </FormEdit>
      </GlobalWrap>
      <Menu></Menu>
    </GlobalContainer>
  );
};
export default EditHabit;
