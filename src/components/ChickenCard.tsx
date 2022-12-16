import { ChickenJSON } from "../selectChickens";

interface Props {
  chickenInfo: ChickenJSON;
}

const ChickenCard = ({ chickenInfo }: Props) => {
  return (
    <section className="chicken-card">
      <h2>{chickenInfo.Breed}</h2>
      <img className="chicken-image"></img>
      <ul className="chicken-card-stats">
        <li>{chickenInfo["Eggs per year"]} Eggs Per Year</li>
        <li>
          <ul>
            Weight
            <li>Hen: {chickenInfo["Weight(Hen)"]}lbs</li>
            <li>Rooster: {chickenInfo["Weight(Rooster)"]}lbs</li>
          </ul>
        </li>
        <li>
          Egg Color:{" "}
          {typeof chickenInfo.eggColor === "string" ? (
            chickenInfo.eggColor
          ) : (
            <ul>
              {chickenInfo.eggColor.map((color) => {
                return <li>{color}</li>;
              })}
            </ul>
          )}
        </li>
        <li>
          <ul>
            Other Stats:
            <li>{chickenInfo.broody === 1 ? "Broody" : "Not Broody"}</li>
            <li>{chickenInfo.hybrid === 1 ? "Hybrid" : "Purebred"}</li>
            <li>
              {chickenInfo.pet === 2
                ? "Great Pet"
                : chickenInfo.pet === 1
                ? "Friendly"
                : "Skittish"}
            </li>
          </ul>
        </li>
      </ul>
      <div className="chicken-description">
        <h3>Meet the breed</h3>
        <p>Description goes here</p>
      </div>
    </section>
  );
};

export default ChickenCard;
