import { FaUser } from "react-icons/fa";

import styles from "./CharacterList.module.css";

export default function CharacterList({ character, setSelectedCharacter, setModalIsOpen }) {

  const handleClickCharacter = () => {
    setModalIsOpen();
    setSelectedCharacter(character);
  };

  return (
    <div className={styles.containerCharacter} onClick={handleClickCharacter}>
      <span>
        <FaUser size={20} />
      </span>
      <h4>{character.name}</h4>
    </div>
  );
}
