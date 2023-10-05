import styles from "@/styles/Home.module.css";

type Route = {
  displayName: string;
  location: string;
};

const RouteList: Route[] = [
  { displayName: "Home", location: "/" },
  { displayName: "About", location: "/about" },
];

export default function NavBar() {
  return (
    <>
      <div className={styles.columnContainer}>
        <div className={styles.navBar}>
          {RouteList.map((route) => {
            return (
              <a
                key={route.location}
                href={route.location}
                style={{ fontSize: 30, textDecorationLine: "underline" }}
              >
                {route.displayName}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
