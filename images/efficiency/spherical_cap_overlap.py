#!/usr/bin/python3
import numpy as np

# Three spherical caps: 1 and 2 are centered on the z-axis, 3 is pi
# radians wide
cap_1_width = np.arcsin(1.35/1.404) # radians
cap_2_width = np.arcsin(0.95)       # radians
sheet_half_angle = 3 * np.pi/180    # radians
cap_3_tilt = (np.pi/2 - cap_1_width) + sheet_half_angle # radians, in yz plane
# Generate random points on the surface of a sphere
num_points = int(3e4)
phi = np.random.uniform(0, 2*np.pi, num_points)
theta = np.arccos(np.random.uniform(-1, 1, num_points))
# Calulate z in a rotated frame where cap 2 is centered on the (new) z-axis:
z_rotated = (np.sin(cap_3_tilt) * np.sin(theta) * np.sin(phi) +
             np.cos(cap_3_tilt) * np.cos(theta))
# Check which caps each point occupies:
in_cap_1 = theta < cap_1_width
in_cap_2 = theta < cap_2_width
in_cap_3 = z_rotated > 0
# Estimate the fraction of the first cap covered by the second and third caps
ratio_1_2 = (np.count_nonzero(in_cap_1 & in_cap_2) /
             np.count_nonzero(in_cap_1))
ratio_2_3 = (np.count_nonzero(in_cap_2 & in_cap_3) /
             np.count_nonzero(in_cap_2))
print("Spherical cap 1 half-angle: %0.3fpi radians (%0.2f degrees)"%(
    cap_1_width / np.pi, cap_1_width * 180/np.pi))
print("Spherical cap 2 half-angle: %0.3fpi radians (%0.2f degrees)"%(
    cap_2_width / np.pi, cap_2_width * 180/np.pi))
print("Spherical cap 3 tilt angle: %0.3fpi radians (%0.2f degrees)"%(
    cap_3_tilt / np.pi, cap_3_tilt * 180/np.pi))
print("Fraction of cap 1 covered by cap 2: %0.5f"%(ratio_1_2))
print("Fraction of cap 2 covered by cap 3: %0.5f"%(ratio_2_3))

# Optionally, visualize
if num_points <= 1e5:
    print("Visualizing...")
    import matplotlib.pyplot as plt
    from mpl_toolkits.mplot3d import axes3d
    x = np.sin(theta) * np.cos(phi)
    y = np.sin(theta) * np.sin(phi)
    z = np.cos(theta)
    fig = plt.figure()
    ax1 = plt.subplot(1, 2, 1, projection='3d')
    ax2 = plt.subplot(1, 2, 2, projection='3d')
    cond = in_cap_1 & ~in_cap_2
    ax1.scatter(x[cond], y[cond], z[cond], c='red')
    ax2.scatter(x[cond], y[cond], z[cond], c='red')
    cond = in_cap_2 & ~in_cap_3
    ax1.scatter(x[cond], y[cond], z[cond], c='blue')
    ax2.scatter(x[cond], y[cond], z[cond], c='blue')
    cond = ~in_cap_1 & ~in_cap_2 & in_cap_3
    ax1.scatter(x[cond], y[cond], z[cond], c='green')
    ax2.scatter(x[cond], y[cond], z[cond], c='green')
    cond = in_cap_1 & in_cap_2 & in_cap_3
    ax1.scatter(x[cond], y[cond], z[cond], c='yellow')
    ax2.scatter(x[cond], y[cond], z[cond], c='yellow')
    ax1.view_init(0, 0)
    ax2.view_init(90, 0)
    ax1.set_xlim(-1, 1); ax1.set_ylim(-1, 1); ax1.set_zlim(-1, 1)
    ax2.set_xlim(-1, 1); ax2.set_ylim(-1, 1); ax2.set_zlim(-1, 1)
    ax1.set_xlabel('X'); ax1.set_ylabel('Y'); ax1.set_zlabel('Z')
    ax2.set_xlabel('X'); ax2.set_ylabel('Y'); ax2.set_zlabel('Z')
    ax1.set_xticklabels(['']*len(ax1.get_xticklabels()))
    ax1.set_yticklabels(['']*len(ax1.get_yticklabels()))
    ax2.set_xticklabels(['']*len(ax2.get_xticklabels()))
    ax2.set_yticklabels(['']*len(ax2.get_yticklabels()))
    ax2.set_zticklabels(['']*len(ax2.get_zticklabels()))
    ax1.set_aspect(1)
    ax2.set_aspect(1)
    fig.show()
    print("Red's just cap 1, green's just cap 3, yellow's the 1/2/3 overlap.")
else:
    print("\nReduce 'num_points' below 1e5 if you want to see a visualization.")

