interface SpecialitiesType {
  id: string;
  imgSrc: string;
  description: string;
}

interface SpecialityPropsType {
  specialityProps: SpecialitiesType;
}

function SpecialityCard({ specialityProps }: SpecialityPropsType) {
  return (
    <article className="specialities">
      <div className="image-container">
        <img src={specialityProps.imgSrc} alt="La Spécialité" />
      </div>
      <p>{specialityProps.description}</p>
    </article>
  );
}

export default SpecialityCard;
