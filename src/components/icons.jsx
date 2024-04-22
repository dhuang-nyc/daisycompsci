import "./icons.css";
import { socialAccounts } from "../config/config";

export const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        {socialAccounts &&
          socialAccounts.map((account) => {
            return (
              <li
                className={`social-account ${account.name}`}
                key={account.name}
              >
                <a href={account.show ? account.link : ""}>{account.icon}</a>
              </li>
            );
          })}
      </ul>
      <p>Follow me</p>
    </div>
  );
};
