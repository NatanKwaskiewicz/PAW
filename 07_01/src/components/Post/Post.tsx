import styles from './Post.module.scss'

const Post = () => {
    return (
        <div className={styles.Post}>
            <h1>Post</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor nulla, faucibus vel tincidunt vehicula, eleifend vel ante. Aliquam dignissim diam ut mi dignissim molestie. Nulla mattis, orci imperdiet accumsan volutpat, urna erat vestibulum metus, sed sodales turpis sem id nisi. Curabitur ornare tortor eu enim tempus volutpat. Sed ultricies arcu eu ipsum elementum porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In finibus, lectus ac rutrum vulputate, eros lectus faucibus elit, eu placerat turpis ex id elit. Vestibulum sed diam sed mi fermentum imperdiet. Vivamus elementum, sapien ac varius cursus, lectus orci congue orci, in ultrices nisi tortor eget magna.</p>
        </div>
    );
}

export default Post;