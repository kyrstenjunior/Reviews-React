import * as C from './styles';

const Content = ({img, name, profission, description}) => {

  return (
    <C.Container>
        <img src={img} />
        <C.Container>
          <C.NamePerson>{name}</C.NamePerson>
          <C.Profission>{profission}</C.Profission>
        </C.Container>
        <C.About>{description}</C.About>
    </C.Container>
  )
}

export default Content