export default function DefaultScreen(input,fetch,nom) {
    input.defaultValue = localStorage.getItem(nom) || "Rome";
     fetch();
   }