import PageHead from "@/components/commons/PageHead";
import { Fragment, ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  title?: string;
}

// Intinya ini digunakan untuk membuat keperluan Layout Authentikasi
const AuthLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <Fragment>
      <PageHead title={title}></PageHead>
      <section className="max-w-screen-3xl 3xl:container p-6">
        {children}
      </section>
    </Fragment>
  );
};

export default AuthLayout;
