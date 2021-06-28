import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemToDoView: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },

  itemToDoName: {
    width: '92%',
    alignItems: 'center',
    flexDirection: 'row'
  },

  itemTextToDo: {
    width: '100%',
    fontSize: 18,
    fontFamily: 'nunito600'
  },

  deleteButton: {
    width: 30,
    height: 25,
  }
});

export default styles;