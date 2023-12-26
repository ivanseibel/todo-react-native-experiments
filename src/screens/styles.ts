import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  tasksSummaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
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
});