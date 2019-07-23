import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;

const EventDetailedMap = ({ lat, lng }) => {
	const zoom = 14;
	return (
		<Segment attached="bottom" style={{ padding: 0 }}>
			<div style={{ height: "300px", width: "100%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyDL4Ttv26gzOf7f3KvpGd47QKFdOjlGQX0" }}
					defaultCenter={{ lat, lng }}
					defaultZoom={zoom}
				>
					<Marker lat={lat} lng={lng} />
				</GoogleMapReact>
			</div>
		</Segment>
	);
};

export default EventDetailedMap;
