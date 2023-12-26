import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 30,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  inputContainer:{
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  bodyContainer: {
    flex: 1,
    zIndex: -1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    marginTop: -80,
  },
  tasksSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  tasksSummaryItemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tasksCreatedLabel: {
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 14,
    color: "#4EA8DE"
  },
  tasksDoneLabel: {
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 14,
    color: "#8284FA"
  },
  summaryBadge: {
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: "#333333",
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#D9D9D9"
  },
  tasksListContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    gap: 20,
  },
});