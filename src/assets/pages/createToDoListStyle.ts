import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'nunito700',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  containerTextButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonAddItens: {
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  label: {
    color: '#8FA7B3',
    fontFamily: 'nunito600',
    marginBottom: 8
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#D3E2E6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top'
  },

  imagesInput: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32
  },

  nextButton: {
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32
  },

  nextButtonText: {
    fontFamily: 'nunito800',
    fontSize: 16,
    color: '#fff'
  }
});

export default styles;