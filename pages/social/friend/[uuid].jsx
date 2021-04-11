import { Layout } from "../../../components/Layout/Layout";

const FriendPage = ({ uuid, img, fullname }) => {
  //TODO: add a return btn
  return (
    <Layout>
      <div className="pt-24">
        <h4 className="w-full text-2xl lg:text-5xl text-white font-light tracking-wider text-opacity-90 px-16 lg:px-32 pb-12 inline-flex items-center">
          {uuid} - {fullname}
        </h4>
        <div className="px-16 mt-6">
          <img src={img} alt={uuid + " profile image"}></img>
        </div>
      </div>
    </Layout>
  );
};

FriendPage.getInitialProps = async (ctx) => {
  let body;
  switch (ctx.query.uuid) {
    case "floriaan":
      body = {
        img: "https://avatars.githubusercontent.com/u/10078837?v=4",
        fullname: "Florian Leroux",
      };
      break;
    case "ophzl":
      body = {
        img: "https://avatars.githubusercontent.com/u/56133800?v=4",
        fullname: "Ophélie Zeitel",
      };
      break;
    case "anatole-godard":
      body = {
        img: "https://avatars.githubusercontent.com/u/48732483?v=4",
        fullname: "Anatole Godard",
      };
      break;
    case "william-langlois":
      body = {
        img: "https://avatars.githubusercontent.com/u/56624956?v=4",
        fullname: "William Langlois",
      };
      break;

    default:
      body = {
        img: "https://avatars.githubusercontent.com/u/10078837?v=4",
        fullname: "Florian Leroux",
      };
      break;
  }

  return { uuid: ctx.query.uuid, ...body };
};
export default FriendPage;
