import React from "react";

const Header = () => {
  return (
    <header className="main-header">
      <nav>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="135" height="44">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M12.176 10.173c.863-.15 1.712-.31 2.563-.113.38.09.66.035.93-.226.2-.19.43-.277.7-.165.17.07.3.2.31.37.01.21-.21.1-.32.17-.16.1-.34.17-.49.27-.32.22-.21.51-.08.78.14.27.4.26.622.15.185-.08.337-.23.51-.35.16-.11.36-.24.51-.06.19.235.464.446.5.762.034.32-.33.29-.498.44-.12.1-.24.194-.33.313-.09.11-.15.21-.32.212-.55.01-.817.39-.988.842-.138.352-.25.712-.438 1.042-.11.196-.226.434-.467.44-.24.01-.306-.244-.39-.43-.11-.236-.264-.41-.554-.36-.28.05-.47.22-.53.495-.064.295.077.52.345.62.34.127.44.38.51.704.15.724.684 1.04 1.41.873.71-.167 1.575.123 1.895.723.272.51.65.646 1.18.6.562-.05.92.28.95.834.02.35-.046.685-.168 1.01-.36.96-.905 1.808-1.58 2.58-.49.566-.85 1.18-.54 1.97.08.21.23.48.026.61-.25.166-.478-.08-.66-.26-.08-.083-.136-.2-.195-.302-.545-.95-.82-1.96-.66-3.06.1-.73-.25-1.22-.84-1.576-.93-.56-1.06-1.29-.35-2.15.15-.18.15-.27-.04-.4-.55-.39-1.044-.88-1.64-1.158-.97-.456-1.473-1.28-1.93-2.14-.34-.635-.303-1.325.16-1.944.133-.174.23-.38.33-.58.136-.283.086-.54-.19-.72-.26-.164-.496-.16-.746.06-2.548 2.24-3.657 5.05-3.14 8.39.756 4.9 5.37 8.32 10.456 7.51 4.585-.737 8.008-5.1 7.525-9.697-.045-.453-.37-.695-.85-.633-.78.1-1.538-.457-1.658-1.21-.036-.22-.094-.43-.234-.62-.23-.3-.14-.474.24-.484.064-.003.134-.017.2-.04.12-.045.304 0 .334-.18.027-.146-.13-.18-.22-.253-.225-.182-.415-.34-.36-.72.055-.342-.144-.67-.502-.82-.47-.19-.46-.615-.28-.9.217-.33.05-.402-.143-.55-2.224-1.676-4.7-2.266-7.434-1.71-.88.18-1.74.46-2.48 1.015zm18.92 8.016c.008 3.28-1.14 6.15-3.033 8.79-1.87 2.6-4.012 4.97-6.13 7.37-1.697 1.92-3.44 3.8-5.07 5.77-.175.21-.295.41-.582.08-3.78-4.31-7.68-8.54-11.15-13.12-1.51-2-2.53-4.18-2.92-6.67-.79-5.11.69-9.46 4.41-12.99 3.07-2.93 6.82-4.19 11.04-3.89C24.32 4 29.82 9.06 30.9 15.61c.14.85.22 1.7.21 2.565zm18.77-2.61H46.19c0-1.57.122-3.44.275-4.54l-2.39.37c-.737 1.16-1.197 2.73-1.41 4.14l-2.055.76v1.31h1.84v9.44c0 3.21 1.47 4.29 4.046 4.29 1.38 0 2.544-.34 3.647-.98l-.368-1.35c-.674.21-1.195.33-1.747.33-1.532 0-1.84-.74-1.84-3.04v-8.7h3.22l.46-2.054zm7.052 3.34c-.03-1.87-.52-3.28-.736-3.74h-.46l-4.506 1.22v1.16c1.655.06 2.054.37 2.054 2.6v7.38c0 1.74-.368 2.05-2.023 2.14v1.224h8.276V29.7c-2.207-.06-2.513-.4-2.513-2.145v-5.03c0-2.668.705-3.526 3.126-3.526.613 0 .95.06 1.35.21l.765-3.93c-.24-.1-.64-.16-1.04-.16-1.65 0-3.31 1.38-4.29 3.77zm14.04 12.01v-1.22c-1.748-.06-1.993-.4-1.993-2.15V15.27h-.583l-5.21 1.135v1.16c1.654.06 2.053.37 2.053 2.605v7.388c0 1.743-.368 2.05-2.023 2.142v1.228h7.755zM69.24 11.11c0-1.288-1.01-2.33-2.33-2.33-1.317 0-2.36 1.042-2.36 2.33 0 1.287 1.043 2.33 2.33 2.33 1.318 0 2.36-1.043 2.36-2.33zm15.51 12.506c0 4.445-1.286 5.61-3.493 5.61-1.043 0-2.238-.49-3.035-1.472v-8.43c1.012-1.072 2.146-1.563 3.372-1.563 2.115 0 3.157 1.35 3.157 5.86zm-6.71-5.856c-.06-1.194-.49-2.237-.644-2.574h-.46l-4.506 1.226v1.165c1.656.06 2.054.368 2.054 2.606v13.395c0 1.748-.368 2.054-2.023 2.146v1.226h7.91v-1.226c-1.84-.06-2.14-.43-2.14-2.115v-3.96c.98 1.1 2.36 1.53 3.8 1.53 4.11 0 6.72-2.82 6.72-8.13 0-5.4-2.51-7.85-6.04-7.85-1.9 0-3.67 1.1-4.66 2.54zm27.742 5.427c0-5.027-2.882-8.03-7.388-8.03-4.475 0-7.48 3.156-7.48 8.122 0 5.08 2.882 8.03 7.388 8.03 4.17 0 7.48-2.73 7.48-8.13zm-4.077 0c0 4.353-1.104 6.437-3.28 6.437-2.606 0-3.433-2.023-3.433-6.468 0-4.353.858-6.253 3.31-6.253 2.238 0 3.403 1.716 3.403 6.284zm15.08-7.602h-3.677c0-1.564.122-3.434.276-4.537l-2.39.368c-.737 1.165-1.197 2.728-1.41 4.138l-2.055.766v1.318h1.84v9.442c0 3.218 1.47 4.29 4.04 4.29 1.38 0 2.54-.336 3.65-.98l-.37-1.348c-.68.214-1.2.337-1.75.337-1.54 0-1.84-.74-1.84-3.04v-8.71h3.22l.46-2.06zM133 23.187c0-5.027-2.88-8.03-7.388-8.03-4.475 0-7.48 3.156-7.48 8.122 0 5.08 2.882 8.03 7.39 8.03 4.167 0 7.478-2.73 7.478-8.13zm-4.077 0c0 4.353-1.103 6.437-3.28 6.437-2.605 0-3.433-2.023-3.433-6.468 0-4.353.858-6.253 3.31-6.253 2.238 0 3.403 1.716 3.403 6.284z"
            />
          </svg>
        </div>
        <label for="search"></label>
        <input
          id="header-search"
          list="predefined-search"
          size="60"
          type="search"
          autocomplete="off"
          placeholder="  Search for itineraries, destinations, hotels or activities"
        />
        <datalist id="predefined-search">
          <option value="Packages and Stays"></option>
          <option value="Online Experiences By Tripoto"></option>
          <option value="How To earn badges"></option>
          <option value="Goa Packages"></option>
        </datalist>

        <ul className="navigation">
          <a href="#inspiration">
            <li>Inspirations</li>
          </a>
          <a href="#">
            <li>Forum</li>
          </a>
          <a href="#packages">
            <li>Packages</li>
          </a>
          <a href="#">
            <li>Publish Trip</li>
          </a>
          <a href="#contact">
            <li>Sign in</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
