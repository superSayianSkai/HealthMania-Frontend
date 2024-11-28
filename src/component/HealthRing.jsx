import ActivityRings from //   ActivityRingsConfig,
//   ActivityRingsData,
"react-activity-rings";

const HealthRing = () => {
  const activityData = [{ value: 0.8 }, { value: 0.6 }, { value: 0.2 }];

  const activityConfig = {
    width: 150,
    height: 150,
  };

  return (
    <div>
      <ActivityRings data={activityData} config={activityConfig} />
    </div>
  );
};

export default HealthRing;
